class BaseModel {
    // data 为对象  errMsg 为字符串
    constructor(data, errMsg) {
        // 兼容只传入 errMsg
        if(typeof data === 'string'){
            this.errMsg = data
            data = null
            errMsg = null
        } 

        if(data) {
            this.data = data
        }

        if(errMsg) {
            this.errMsg = errMsg
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, errMsg) {
        super(data, errMsg)
        this.errCode = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, errMsg) {
        super(data, errMsg)
        this.errCode = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}