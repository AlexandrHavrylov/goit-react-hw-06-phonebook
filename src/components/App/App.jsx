import Form from "components/Form/Form";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { MainContainer } from "styles/App.styled";
import { Title } from "../../styles/App.styled";

function App() {
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Form />
      <Filter />
      <Contacts />
    </MainContainer>
  );
}

export default App;
