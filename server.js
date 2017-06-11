const express = require('express');
const hbs = require('hbs');



var app = express();
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {

  //res.send('<h1>Hello Express</h1>');
  // res.send({
  //     name:'Dibyendu',
  //     likes:['Books','Computers','Disha']
  //
  // });

    res.render('welcome.hbs',{

      pageTitle:'Welcome to Dream Photography',
      currentYear: new Date().getFullYear()
    })


});

app.get('/about',(req,res) => {

  //res.send('About Page')
  res.render('about.hbs',{

        pageTitle:'About Page',
        currentYear: new Date().getFullYear()


  })

});


app.get('/bad',(req,res)=> {

  res.send({
        errorMessage: 'Error Message'
  });

})

app.listen(3000,()=> {
  console.log('Server is Up on Port 3000');
});
