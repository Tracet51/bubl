import { Bubl } from 'src/app/DTOs/Bubl';
import { BublComment } from 'src/app/DTOs/BublComment';

export let defaultComments: Array<BublComment> = [{
  "id": 1,
  "comment": "How would this work with clients? They typically want to see us or have us available every day.",
  "date": new Date(), 
  "finID": 1,
  "bublID": 1
},
{
  "id": 2,
  "comment": "We could work in rotations. So the team could be split into two and half the team get Monday off and the half the team gets Friday off.",
  "date": new Date(), 
  "finID": 2,
   "bublID": 1
},
{
  "id": 3,
  "comment": "Or we can work on some split shift rotation during the week were certain people get certain days off during the week. ",
  "date": new Date(), 
  "finID": 2,
  "bublID": 1
},
{
  "id": 4,
  "comment": "YES! Love the fig bar idea! I think @MarcHelberg would be a great person to head this initiative up.",
  "date": new Date(), 
  "finID": 1,
  "bublID": 2
},
{
  "id": 5,
  "comment": "I wonder if we should think about this more. Is there a better usage of our office budget dollars?",
  "date": new Date(), 
  "finID": 2,
  "bublID": 2
},
{
  "id": 6,
  "comment": "This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment. This is a poor comment.",
  "date": new Date(), 
  "finID": 1,
  "bublID": 2
}
]

export let BublData: Array<Bubl> = [
    {
        "id": 1,
        "yes": 10,
        "no": 50,
        "total": 100,
        "daysRemaining": 90,
        "summary": "We should work 4 10-hour days",
        "description": "Instead of working 5 8ish-hour days we should work 4 10-hour days. This would enable us to get stuff done on off day which is during the week. We could go to the doctor or take care errands that could only be accomplished during the week.",
        "comments": defaultComments.filter((comment) => comment.bublID === 1)
      },
      {
        "id": 2,
        "yes": 10,
        "no": 20,
        "total": 100,
        "daysRemaining": 33,
        "summary": "More Fig Bar Flavors",
        "description": "Two fig bar flavors are not enough. We need more flavors! Plus they are fairly cheap!",
        "comments": defaultComments.filter((comment) => comment.bublID === 2)
      }   
]