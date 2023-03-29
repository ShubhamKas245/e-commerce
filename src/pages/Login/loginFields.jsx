import Input from "../../compoents/input";


export const loginFields=[
  
    {
           component:Input,
           id:"email-address",
           name:"email",
           type:"email",
           autoComplete:"email",
           placeholder:"Email Address",
           className:'rounded-t-md',
           value:'',
           validate:(value)=>{
            if(!value){
                return 'Required'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                return 'Invalid email address';
              }
              return null;
        }
    },
    {
       component:Input,
       name:'password',           
       id:"password",
       type:"password",
       autoComplete:"new-password",
       className:'rounded-b-md',
       placeholder:"Password",
       value:'',
       validate:(value)=>{
        if(!value){
            return 'Required...';
           }
           return null;
       },
       
    },

]

export const loginInitValues=loginFields.reduce((p,c)=>{
    return ({...p, [c.name]:c.value}),
    { }
})