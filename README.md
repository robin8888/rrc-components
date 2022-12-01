# rrc-components

## Robinson Rodriguez C0rrea 

### Ejemplo

```
import {} from rrc-components
```
```<ProductCard
                product={ product }
                initialValues={{
                    count: 6,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            <ProductImage  />
                            <ProductTitle />
                            <ProductButtons  />
                            
                        </>
                    )
                }
            </ProductCard>
```