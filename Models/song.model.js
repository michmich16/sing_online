import { supabase } from '../Config/supabase_config.js';

export default class SongModel {
    static async getAllRecords(){
        try{
            const{data, error} = await supabase
            .from ('Songs')
            .select('title')
            if(error){
                console.error(error);
            } else{
                return data
            }

        } catch(error) {
            console.error('fejl i kald af sangliste');
        }
    }
    static async getRecordByID(){
        
    }
}

 
 