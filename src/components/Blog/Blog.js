import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>How does react work?</h3>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>

            <h3>Difference between props and state</h3>
            <p> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>

            <h3>
                How can does  work useeffect
            </h3>
            <p>
                The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
            </p>
        </div>
    );
};

export default Blog;