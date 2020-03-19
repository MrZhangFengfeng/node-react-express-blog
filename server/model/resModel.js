class BaseModel {
    // data 为对象  errorMsg 为字符串
    constructor(data, errorMsg) {
        // 兼容只传入 errorMsg
        if(typeof data === 'string'){
            this.errorMsg = data
            data = null
            errorMsg = null
        } 

        if(data) {
            this.data = data
        }

        if(errorMsg) {
            this.errorMsg = errorMsg
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, errorMsg) {
        super(data, errorMsg)
        this.errorCode = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, errorMsg) {
        super(data, errorMsg)
        this.errorCode = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}