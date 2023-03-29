import Input from "../../compoents/input";


export const registerFields=[
    {
        component:Input,
        id:'name',
        name:'name',
        autoComplete:'name',
        placeholder:'Name',
        value:'',
        className:'rounded-t-md',
        validate:(value)=>{
            if(!value){
                return 'Required...';
               }
               return null;
           },
    },
    {
           component:Input,
           id:"email-address",
           name:"email",
           type:"email",
           autoComplete:"email",
           placeholder:"Email Address",
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
       placeholder:"Password",
       value:'',
       validate:(value)=>{
        if(!value){
            return 'Required...';
           }
           return null;
       },
       
    },
    {
         component:Input,
         name:'confirmPassword',
        id:"confirmPassword",
        type:"password",
        autoComplete:"new-password",
        placeholder:"Confirm Passowrd",
        value:'',
        className:'rounded-b-md',
        validate:(value)=>{
            if(!value){
                return 'Required...';
               }
            if(value !== password.value){
                return 'Confirm Password should match with passowrd';
            }   
               return null;
           },
    },
]

export const registerInitValues=registerFields.reduce((p,c)=>{
    return ({...p, [c.name]:c.value}),
    { }
})