import { supabase } from '../Config/supabase.config.js';

export default class ArtistModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('artist')
                .select('name, id')

            if(error){
                throw new Error(error)
            } else{
                return data
            }
        }catch(error){
            console.error(`Fejl i kald af artists: ${error}`);
        }
    }

    static async getRecordByID(){
        try{
            const {data, error } = await supabase
            .from ('artist')
            .select('*')
            .eq('id',id)

        if(error){
            throw new Error(error)
        }else{
            return data
        }
        }catch(error){
            console.error(`Fejl i kald af artist-liste: ${error}`);
        }
    }
}

