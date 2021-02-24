import React from 'react';
import ShopMen from './../../assets/pexels-unpetitvoyou-3317133.jpg';
import ShopWomen from './../../assets/pexels-steven-john-pascua-4656650.jpg';
import './styles.scss';
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a>Shop women's</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
          <a>Shop Men's</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
