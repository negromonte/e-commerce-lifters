import React from 'react';

import './Filters.css';

function Filters() {
  return (
    <section className='product-filters'>
      <div className='filter'>
        <h3 className='filter-title'>Filters</h3>
        <a className='filter-clean color-default'>Clear filters</a>
      </div>
      <div className='filter-checkBox'>
        <h4 className='sub-title'>Categories:</h4>
        <input type="checkbox" id="Jackets" name="Jackets" value="Jackets" />
        <label htmlFor="Jackets"> Jackets</label>
        <br />
        <input type="checkbox" id="Fleece" name="Fleece" value="Fleece" />
        <label htmlFor="Fleece"> Fleece</label>
        <br />
        <input type="checkbox" id="Sweatshirts & Hoodies" name="Sweatshirts & Hoodies" value="Sweatshirts & Hoodies" />
        <label htmlFor="Sweatshirts & Hoodies"> Sweatshirts & Hoodies</label>
        <br />
        <input type="checkbox" id="Fleece" name="Fleece" value="Fleece" />
        <label htmlFor="Fleece"> Fleece</label>
        <br />
        <input type="checkbox" id="Fleece" name="Fleece" value="Fleece" />
        <label htmlFor="Fleece"> Fleece</label>
        <br />
        <input type="checkbox" id="Fleece" name="Fleece" value="Fleece" />
        <label htmlFor="Fleece"> Fleece</label>
        <br />
      </div>
      <div className='filter-color'>
        <h4 className='sub-title'>Color:</h4>
        <input id="red" className="color-input" type="button"/>
        <input id="blue" className="color-input" type="button"/>
        <input id="yellow" className="color-input" type="button"/>
      </div>
    </section>
  );
}

export default Filters;
