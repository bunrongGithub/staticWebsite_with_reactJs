const getFormValues = (form) =>{
   const formData = new FormData(form);
   // const email = formData.get('email');
   // console.log(email);
   //console.log([...formData.entries()]);
   const values = [...formData.values()];
   const isEmpty = values.includes('');

   const data = Object.fromEntries(formData);
   //console.log(data);
   return {isEmpty,data};
};
export default getFormValues;