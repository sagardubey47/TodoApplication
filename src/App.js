import React,{useState, useEffect} from 'react'
import Header from "./components/Header";
import SideBar from "./components/SideBar"
import MainMenu from "./components/MainMenu"
import Loading from "./components/Loading"
import TodoInputForm from "./components/TodoInputForm"
import "./style/App.css"

function App() {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);
    const [whatError, setWhatError] = useState("");
    const [mainPage, setMainPage] = useState(null);
    const [isAddSet, setIsAddSet] = useState(false);



      // delete item
      const deleteCurrentTask = async(id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"id":id});

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:5000/", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            setTodos(result);
            setMainPage(result[0]);  
          })
          .catch(error => console.log('error', error));
      }



      // promp input form
      const promptAdd = () => {
        setIsAddSet(true);
      }

      // add new task
      const addTask = async (title, content) => {
        setIsAddSet(false);
        if(!title.trim().length || !content.trim().length) {
           return;
        } 

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"title":title,"content":content});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        await fetch("http://localhost:5000/", requestOptions)
            .then((response)=>{
                      if(response.status >= 200 && response.status <= 299) {
                          return response.json();
                      } else {
                          setError(true);
                          setWhatError("404 data not found ...  please ensure that city name is correct!");
                          throw new Error(response.status);
                      }
            })  
          .then((result) => {
            //console.log("before set todo",result);
            setTodos(result);
            console.log("fetched after add",result);
          })
          .catch(error => console.log('error', error));
      }
    
      // on mount 
      useEffect(() => {

       const getTodos = async () => {
                        await fetch("http://localhost:5000/")
                             .then((response)=>{
                                    if(response.status >= 200 && response.status <= 299) {
                                        return response.json();
                                    } else {
                                        setError(true);
                                        setWhatError("404 data not found ...  please ensure that city name is correct!");
                                        throw new Error(response.status);
                                    }
                             })  
                             .then((result) => {
                                
                                setTodos(result);
                                console.log("fetched in use effect",todos);
                                setMainPage(result[0]);
                                
                              })
                              .catch(error => console.log('error', error));           
        }
       getTodos();

    }, []);


  return (
    <div className="App">
       <Header promptAdd={promptAdd} deleteCurrentTask={deleteCurrentTask}/>
       {
         isAddSet ? <TodoInputForm addTask={addTask}/> : null
       }
       <div className="lower-half">
         <SideBar data={todos}/> 
         {
           mainPage===null ? 
           <Loading /> :  
           <MainMenu id={mainPage.id} 
                     title={mainPage.title} 
                     content={mainPage.content}
                     deleteCurrentTask={deleteCurrentTask}
                      />
         }
        
       </div>
    </div>
  );
}

export default App;
