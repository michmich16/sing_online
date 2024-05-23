import { supabase } from '../Config/supabase.config.js';

export default class AlbumModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('Albums')
                .select('name, id, title, artists(id, name), release_date')

            if(error){
                throw new Error(error)
            } else{
                return data
            }
        }catch(error){
            console.error(`Fejl i kald af album: ${error}`);
        }
    }

    static async getRecordByID(){
        try{
            const {data, error } = await supabase
            .from ('Albums')
            .select('*, artists(id, name)')
            .eq('id',id)

        if(error){
            throw new Error(error)
        }else{
            return data
        }
        }catch(error){
            console.error(`Fejl i kald af album-liste: ${error}`);
        }
    }
}

