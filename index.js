// const express = require('express');
// const app = express();

// app.get('/', (req,res)=>{
//     res.send('Hello wolrd ')
// })

// app.get('/home', (req,res)=>{
//     res.send('This is the  Home Page ')
// })

// app.get('/home/portfolio',(req,res)=>{
//     res.send('This is the portfolio Page ')
// })
// app.listen(4000, ()=>{
//     console.log('running at port 4000')
// })




const express = require('express');
const app = express();
PORT = 4000, 


app.get('/',(req, res)=>{
    res.send('this is not at home paage');
});

app.get('/about',(req,res)=>(
    res.send('about page is required in this page')
));

app.get('/service',(req,res)=>{
    res.send('this is a service page is required in this page');
});

app.get('/blog',(req,res)=>{
    res.send('blog page is importance')
});

app.get('/aboutme',(req,res)=>{
    res.send('aboutme page in required');
});

app.get('/main',(req,res)=>{
    res.send('main is required')
});


app.get('/landing',(req,res)=>{
    res.send('landing page is different from sale landing page ')
});

app.get('/maker',(req,res)=>{
    res.send('sef')
});

app.get('/mobile',(req,res)=>{
    res.send('state value of the amount of money ')
});


app.post('/state',(req,res)=>{
    const data = {
        name:'mkPunk',
        age: 25,
        city: 'New York'
    }
    res.status(200).json({data})

});

app.post('/mark',(req,res)=>{
    const main = {
        name: 'punk',
        NIN: 56891975206,
        BVN: 783902020379,
        age: 30,
        city: "london "
    }
    res.status(200).json({main});
});




app.post('/register',(req,res)=>{
     const user ={
         name: 'punk',
         age: 25,
         city: 'New York',
         email: 'punk@gmail.com'
     }
     res.status(200).json({user});
});



app.get('/or',(req,res)=>{
    res.send('maaaaaaa ammama')
})


app.get('/home/about',(req,res)=>{
    res.send('you are in the homepage and about page')
});

// app.listen(4000,(res,req)=>{
//     console.log('running punk port 4000'); 
// }); 



// app.listen(4000,(res,req)=>{
//     console.log('runing my server port ');
    
// })


// const express = require('express')
// const app = express();



// app.get('/', (req,res) => {
//     res.send('Hello World!')
// });

// app.post('/user',(req,res)=>{
//     const main = {
//         name: "punk",
//         age: 50,
//         city: 'new york',
//     };
//     res.status(200).json({main});
// })




// app.listen(4000, (req,res)=>{
//     console.log('Server running punk on port 4000')
// })