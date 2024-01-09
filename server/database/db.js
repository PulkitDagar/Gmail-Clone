import mongoose from "mongoose";
const Connection = () => {

    const DB_URI = `mongodb://pulkitd132:EH1pANhpxLszSLhT@ac-gsjqnfh-shard-00-00.5spvmy6.mongodb.net:27017,ac-gsjqnfh-shard-00-01.5spvmy6.mongodb.net:27017,ac-gsjqnfh-shard-00-02.5spvmy6.mongodb.net:27017/?ssl=true&replicaSet=atlas-o2tp67-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log('database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;