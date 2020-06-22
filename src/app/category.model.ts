export class Category
{
    public _id? : string
    public name : string;
  


    constructor(p_name:string,p_id:string)
    {
        this._id =  p_id;
        this.name = p_name;
      

    }
}