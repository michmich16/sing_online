import { supabase } from '../Config/supabase.config.js';

export default class SongModel {
    static async getAllRecords(){
        try{
            const{data, error} = await supabase
            .from ('songs')
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
    static async getRecordByID(id){
        try{
            const {data, error} = await supabase
            .from('songs')
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

    static async createRecord(formdata){
        try{
            const {data, error} = await supabase
            .from('songs')
            .select([{
                id: formdata.id,
                title: formdata.title,
                content: formdata.content,
                lyrics: formdata.content,
                artist_id: formdata.artist_id,
                created_at: formdata.created_at
            }
        ])
        if(error){
            throw new Error(error)
        }else {
            return data
        }
        } catch(error){
            console.error(`fejl in create in songsmodel: ${error}`);
        }
    }
    static async updateRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('songs')
            .update([
                {
                    id: formdata.id,
                    title: formdata.title,
                    content: formdata.content,
                    lyrics: formdata.content,
                    artist_id: formdata.artist_id,
                    created_at: formdata.created_at
                }
            ])
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in update in songsmodel ${error}`);
    }
}

    

 
 