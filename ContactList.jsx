import { useEffect } from "react"

const ContactList = () => {
 useEffect(() =>{
  const getContact = async() => {
    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
    const  arrayContacts= await response.json();
  }
  getContact();
 })



  return 
}

export default ContactList 