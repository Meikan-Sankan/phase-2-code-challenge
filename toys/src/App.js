import React, { useState } from 'react';
import List from './Components/List';  // Ensure correct import path

const items = 
  [{
    "id": 1,
    "name": "Toys",
    "members": 20,
    "image": "http://dummyimage.com/161x100.png/ff4444/ffffff",
    "description": "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
  }, {
    "id": 2,
    "name": "Games",
    "members": 14,
    "image": "http://dummyimage.com/195x100.png/ff4444/ffffff",
    "description": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus"
  }, {
    "id": 3,
    "name": "Health",
    "members": 16,
    "image": "http://dummyimage.com/132x100.png/cc0000/ffffff",
    "description": "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse"
  }, {
    "id": 4,
    "name": "Baby",
    "members": 16,
    "image": "http://dummyimage.com/128x100.png/ff4444/ffffff",
    "description": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget"
  }, {
    "id": 5,
    "name": "Computers",
    "members": 19,
    "image": "http://dummyimage.com/244x100.png/ff4444/ffffff",
    "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin"
  }, {
    "id": 6,
    "name": "Movies",
    "members": 11,
    "image": "http://dummyimage.com/149x100.png/cc0000/ffffff",
    "description": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales"
  }, {
    "id": 7,
    "name": "Sports",
    "members": 19,
    "image": "http://dummyimage.com/193x100.png/ff4444/ffffff",
    "description": "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum"
  }, {
    "id": 8,
    "name": "Health",
    "members": 17,
    "image": "http://dummyimage.com/225x100.png/cc0000/ffffff",
    "description": "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis"
  }, {
    "id": 9,
    "name": "Movies",
    "members": 15,
    "image": "http://dummyimage.com/160x100.png/5fa2dd/ffffff",
    "description": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget"
  }, {
    "id": 10,
    "name": "Sports",
    "members": 18,
    "image": "http://dummyimage.com/153x100.png/dddddd/000000",
    "description": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus"
  }, {
    "id": 11,
    "name": "Home",
    "members": 12,
    "image": "http://dummyimage.com/228x100.png/ff4444/ffffff",
    "description": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas"
  }, {
    "id": 12,
    "name": "Movies",
    "members": 10,
    "image": "http://dummyimage.com/212x100.png/dddddd/000000",
    "description": "lectus pellentesque eget nunc donec quis orci eget orci vehicula"
  }, {
    "id": 13,
    "name": "Movies",
    "members": 18,
    "image": "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
    "description": "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu"
  }, {
    "id": 14,
    "name": "Grocery",
    "members": 17,
    "image": "http://dummyimage.com/153x100.png/dddddd/000000",
    "description": "nulla ac enim in tempor turpis nec euismod scelerisque quam"
  }, {
    "id": 15,
    "name": "Kids",
    "members": 15,
    "image": "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
    "description": "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget"
  }]
  function App() {
    const [itemList] = useState(items);
  
    return (
      <div>
        <h1>Item List</h1>
        <table>
          <tbody>
            {itemList.map((item) => (
              <List key={item.id} member={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default App;