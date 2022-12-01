import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductButtons, ProductTitle } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
   
}
  return (
    <>
      <ProductCard
   
                product={ product }
                initialValues={{
                    count: 6,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            
                            <ProductTitle />
                            <ProductButtons  />
                            
                        </>
                    )
                }
            </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
