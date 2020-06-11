import ReitModel from '../../../../../models/reit';

const resolvers = {
    Query: { 
        async reit (root, { id }, { stockCode } ){
            return ReitModel.findAll({
                where: {
                    reitId: id,
                    stockCode: stockCode
                }
            });
        },
    }
};