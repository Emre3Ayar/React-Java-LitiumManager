//imports
import React, { useEffect, useState, useRef } from 'react';
import GetBatteriesRequest, {GetBatterieRequest} from '../services/BatteryServices';
import Navbar from '../components/Navbar';
//import ReactDOM from 'react-dom';
const TemplatePage = () => {
    //const html = fs.readFileSync('/webpage.html', {encoding: 'utf8'});
    useEffect(() => {
      LoadData();
    }, []);
    const [selectedItems, setSelectedItems] = useState<any[]>();
    const [items, setItems] = useState<any[]>();
    const LoadData = async () => {
      const allBattery = await GetBatteriesRequest();
      setItems(allBattery);
    }
    const searchFunction = (id: number) => {
      const battery = GetBatterieRequest(id);
      if (!battery) {
        setSelectedItems(battery);
      }
    }
    let card = [];
    return (
        <>
          <Navbar />
            <div style={{ marginLeft: '2%', marginRight: '2%'  }}>
            <h1>Battery list</h1>
              <div className="row">
                <div className="col-4">
                  <div className="d-grid gap-2 col-6 mx-auto">
                  {items?.map((number) => (
                    <button onClick={() => GetBatterieRequest(number.id)} key={number.id} className="btn btn-primary" type="button">{number.batteryCode}</button>
                  ))}
                  </div>
            </div>
          </div>
          {selectedItems == null ? (
            <div></div>
          ) : (
            <div>test</div>
          )}
        </div>
        </>
    );
};
export default TemplatePage;
