/*
We have a bunch of Topics (like news articles) and/or items (like books). Each topic and/or
item has reviews. For each review, we know the reviewer’s name, type (negative | positive |
neutral), and date of review.
Find out the user with maximum negative reviews this month. Find out the user with the
maximum negative reviews last month. Do the same for positive reviews.
You need to create random data of about 20 Topics, with titles like “Topic1”, “Topic2” and so
on. For each of these 20 topics add about 30 reviews, and set the type of these reviews
randomly as negative, positive, or neutral. Set the date of reviews randomly to any date from
this month or any date from last month
Hint: Use an array with an array, can be array of object
*/

articles=[
    {
        article_id:1,
        article_name:'article_1'
    },
    {
        article_id:2,
        article_name:'article_2'
    },  
    {
        article_id:3,
        article_name:'article_3'
    },
    {
        article_id:4,
        article_name:'article_4'
    },
    {
        article_id:5,
        article_name:'article_5'
    },
]

reviews=[
    {
        article_id:1,
        reviewer_name:'kamal',
        type:'positive',
        date:new Date('2023-12-19')
    },
    {
        article_id:2,
        reviewer_name:'hemant',
        type:'negative',
        date:new Date('2023-12-19')
    },  
    {
        article_id:3,
        reviewer_name:'kalpesh',
        type:'positive',
        date:new Date('2023-12-19')
    },
    {
        article_id:4,
        reviewer_name:'Nayan',
        type:'negative',
        date:new Date('2023-12-19')
    },
    {
        article_id:5,
        reviewer_name:'kamal',
        type:'positive',
        date:new Date('2023-12-19')
    },
    {
        article_id:1,
        reviewer_name:'hemant',
        type:'negative',
        date:new Date('2023-12-19')
    } 
    ,
    {
        article_id:2,
        reviewer_name:'kalpesh',
        type:'positive',
        date:new Date('2023-12-19')
    },
    {
        article_id:3,
        reviewer_name:'Nayan',
        type:'negative',
        date:new Date('2023-12-19')
    } 
    ,
    {
        article_id:4,
        reviewer_name:'Kartik',
        type:'positive',
        date:new Date('2023-12-19')
    },
    {
        article_id:5,
        reviewer_name:'Janvi',
        type:'negative',
        date:new Date('2023-12-19')
    }     
]

var users=new Set();

function getPositive(d1,d2){
    let len=Object.keys(reviews).length;
    console.log(len);

    for(let i=0;i<len;i++){
        let r_name=reviews[i].reviewer_name;
        users.add(r_name);
    }

    console.log(users);
    let ulen=users.size;

    let user_pos=[];

    for(let i=0;i<ulen;i++){
        user_pos[i]=0;
    }

    console.log(user_pos);
    
    let cnt=0;

  for(let i of users){
        for(let j=0;j<len;j++){
            if(i== reviews[j].reviewer_name && reviews[j].type=='positive' && reviews[j].date> d1 && reviews[j].date<d2){
                user_pos[cnt]=user_pos[cnt]+1;
                console.log(i+" "+reviews[j].reviewer_name);
            }
        }
        cnt=cnt+1;
    }
    console.log(user_pos+" "+user_pos.length);
    
    let maxr=-100;
    index=0;
    for(let i=0;i<user_pos.length;i++){
        if(maxr<user_pos[i]){
            maxr=user_pos[i];
            index=i;
        }
    }
    
    console.log("user_id having max positive reviews : "+index);
    
}

function getNegative(d1,d2){
    let len=Object.keys(reviews).length;
    console.log(users);
    let ulen=users.size;

    let user_neg=[];
    for(let i=0;i<ulen;i++){
        user_neg[i]=0;
    }
    console.log(user_neg);
    
let cnt=0;
  for(let i of users){
        for(let j=0;j<len;j++){
            if(i== reviews[j].reviewer_name && reviews[j].type=='negative' && reviews[j].date> d1 && reviews[j].date<d2){
                user_neg[cnt]=user_neg[cnt]+1;
                console.log(i+" "+reviews[j].reviewer_name);
            }
        }
        cnt=cnt+1;
    }
    console.log(user_neg+" "+user_neg.length);
    
    let maxr=-100;
    index=0;
    for(let i=0;i<user_neg.length;i++){
        if(maxr<user_neg[i]){
            maxr=user_neg[i];
            index=i;
        }
    }
    
    console.log("user_id having max positive reviews : "+index);
    
}
