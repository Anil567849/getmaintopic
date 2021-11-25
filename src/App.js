import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Stream from "./component/stream/Stream";
import {Routes, Route} from 'react-router-dom';
import Subject from "./component/stream/subject/Subject";

function App(props) {
  // console.log("app " , props);
  // console.log("app " , props.streamName);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/stream/bcom" element={<Stream streamName="BCOM" />}>  </Route>
        <Route exact path="/stream/bse" element={<Stream streamName="BSE" />}>  </Route>
        <Route exact path="/stream/ba" element={<Stream streamName="BA" />}>  </Route>
        <Route exact path="/stream/bcom/subject" element={<Subject />}>  </Route>
        <Route exact path="/stream/bse/subject" element={<Subject />}>  </Route>
        <Route exact path="/stream/ba/subject" element={<Subject />}>  </Route>
        <Route exact path="/" element={<Home />}>  </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
