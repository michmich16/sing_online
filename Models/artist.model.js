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

    static async createRecord(formdata){
        try{
            let{data, error} = await supabase
            .from('artist')
            .insert([
                {
                    id: formdata.id,
                    name: formdata.name,
                    description: formdata.description,
                    created_at: formdata.created_at
                }
            ])
            if(error){
                throw new Error(error.message);
            }
            return data
        } catch(error) {
            console.error(`error in create in artistmodel ${error}`);
        }
    }
}

