import { Layout } from "antd";
import "antd/dist/antd.css";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

import ContentComponent from "./components/content/content";
import HeaderComponent from "./components/header/header";
import PageHeaderComponent from "./components/page-header/page-header";

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App() {
  return (
    <div className="App">

      <Layout>
        <HeaderComponent />
        <PageHeaderComponent />
        <ContentComponent />
      </Layout>

    </div>
  );
}

export default App;
