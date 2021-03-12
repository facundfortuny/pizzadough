import React, { useState } from 'react';

import '../css/style.scss';

const useDoughState = () => {
  const [flour, setFlour] = useState();
  const [starter, setStarter] = useState();
  const [waterPerc, setWaterPer] = useState();
  const [total, setTotal] = useState(0);

  const setNewDough = () => {
    setFlour();
    setStarter();
    setWaterPer();
    setTotal(0);
  };

  const setTotalDough = () => {
    const sourdough = starter / 2;
    const totalFlour = flour + sourdough;
    const waterNeeded = totalFlour * (waterPerc / 100);
    const total = waterNeeded - sourdough;
    setTotal(total);
  };

  return {
    flour,
    starter,
    waterPerc,
    total,
    setFlour,
    setStarter,
    setWaterPer,
    setTotalDough,
    setNewDough,
  };
};

const DoughCalculator = () => {
  const {
    flour,
    starter,
    waterPerc,
    total,
    setFlour,
    setStarter,
    setWaterPer,
    setTotalDough,
    setNew,
  } = useDoughState();

  return (
    <section className="section">
      <div className="container">
        <div className="box has-text-centered">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label htmlFor="flour" className="label">
                  Flour (g):
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="flour"
                    aria-label="flour"
                    type="number"
                    placeholder="0"
                    value={flour || ''}
                    onChange={e => setFlour(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="sourdough" className="label">
                  Starter (g):
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="sourdough"
                    aria-label="sourdough"
                    type="number"
                    placeholder="0"
                    value={starter || ''}
                    onChange={e => setStarter(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="waterPerc" className="label">
                  Amount of water (%):
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="waterPerc"
                    aria-label="waterPerc"
                    type="number"
                    placeholder="0"
                    value={waterPerc || ''}
                    onChange={e => setWaterPer(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons is-centered">
            <button
              className="button is-success is-light"
              onClick={() => setTotalDough()}
            >
              Calculate
            </button>
            <button
              className="button is-danger is-light"
              onClick={() => setNew()}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="box has-text-centered">
          <h2 className="title is-size-2 is-spaced">You need:</h2>
          <h4 className="title is-size-4 is-spaced">{total.toFixed(2)}g</h4>
          <h4 className="title is-size-4 is-spaced">Water</h4>
        </div>
        <div className="box has-text-centered">
          <h4 className="title is-size-4 is-spaced">You first mix:</h4>
          <h4 className="title is-size-4 is-spaced">
            {(total * 0.75).toFixed(2)}g
          </h4>
          <h4 className="title is-size-4 is-spaced">
            of water with the flour and after the autolysing add the rest:
          </h4>
          <h4 className="title is-size-4 is-spaced">
            {(total * 0.25).toFixed(2)}g
          </h4>
        </div>
      </div>
    </section>
  );
};

export default DoughCalculator;
