import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize,
    GetRowCountFunc as GetRowCountFuncDalsForSequelize,
    GetColumnsSchemaFunc as GetColumnsSchemaFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import ConfigJson from '../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return GetDataOnlyFuncDalsForSequelize();
    };

    return GetDataOnlyFuncDal();
};

let GetIdFunc = async ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    return GetBodyCheckFuncDal();
};

let GetRowCountFunc = async () => {
    if (ConfigJson.isSequelize) {
        return GetRowCountFuncDalsForSequelize();
    };

    return GetFuncDal();
};

let GetColumnsSchemaFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetColumnsSchemaFuncDalsForSequelize();
    };

    return GetColumnsSchemaFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,
    GetColumnsSchemaFunc
};