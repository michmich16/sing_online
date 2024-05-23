import { supabase } from '../Config/supabase.config.js';

export default class SongModel {
    static async getAllRecords(){
        try{
            const{data, error} = await supabase
            .from ('Songs')
            .select('id, title, content, created_at, artists(id, name)')
            if(error){
                throw new Error(error);
            } else{
                return data
            }

        } catch(error) {
            console.error(`Fejl i kald af sangliste: ${error}`);
        }
    }
    static async getRecordByID(){
        try{
            const {data, error} = await supabase
            .from('Songs')
            .select('*, artists(id, name)')
            .eq('id', id)

            if(error) {
                throw new Error(error)
            } else {
                return data
            }

        } catch (error){
            console.error(`Fejl i kald af sang: ${error}`);
        }
        
    }
}

 
 