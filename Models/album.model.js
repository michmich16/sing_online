import { supabase } from '../Config/supabase.config.js';

export default class AlbumModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('albums')
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
            .from ('albums')
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
    static async createRecord(formdata){
        try{
            const {data, error} = await supabase
            .from('albums')
            .select([{
                id: formdata.id,
                created_at: formdata.created_at,
                title: formdata.title,
                artist_id: formdata.artist_id,
                description: formdata.description,
                release_date: formdata.release_date
            }
        ])
        if(error){
            throw new Error(error)
        }else {
            return data
        }
        } catch(error){
            console.error(`fejl in create in albumsmodel: ${error}`);
        }
    }
    static async updateRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('albums')
            .update([
                {
                    id: formdata.id,
                    created_at: formdata.created_at,
                    title: formdata.title,
                    artist_id: formdata.artist_id,
                    description: formdata.description,
                    release_date: formdata.release_date
                }
            ])
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in update in albumsmodel ${error}`);
    }
}

