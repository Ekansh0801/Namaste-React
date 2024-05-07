# Key in Map

In react when we iterate over a iterable through loop(for loop or map) then Best Practice is to pass a unique key everytime this is so because if
we will not use unique key on adding a new elemenent all the elements will be rendered again but if we use key only the new element will be renderd so it for optimization and we can use index also as a key but it is not recommended

          {
            resList.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))
          }

          using index as key
            {
            resList.map((restaurant,index) => (
                <RestaurantCard key = {index} resData = {restaurant}/>
            )) 
          }

          not using key(unaceeptable) <<<<<<<<<<<<<< using indexes as key <<<<<<<<<<<<<< using unique key