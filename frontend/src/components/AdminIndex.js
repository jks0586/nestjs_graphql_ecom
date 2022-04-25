import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import AdminLeft from "./Admin/Layout/AdminLeft";
import VideoList from "./Video/VideoList";
import Video from "./Video/Video";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



export default function AdminIndex(props) {
    
  const { isLoggedIn, setLoggedIn} = props;
  
    return (
        <div className="container1">
            <AdminLeft />
            <div className="content-page">
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/admin/video" element={<VideoList setLoggedIn={setLoggedIn}/>}>
                        </Route>
                        <Route path="/admin/video/:id" element={<Video setLoggedIn={setLoggedIn}/>}>
                        </Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
            </div>
        </div>
    )
}