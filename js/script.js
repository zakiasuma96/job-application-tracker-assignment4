let interviewingList=[];
let rejectedList=[];

let totalCount =document.getElementById("totalCount");
let interviewingCount =document.getElementById("interviewingCount");
let rejectingCount =document.getElementById("rejectingCount");
let allCardNumbers=document.getElementById("allCardNumbers");


const allFilterBtn=document.getElementById("all-filter-btn");
const interviewFilterBtn=document.getElementById("interview-filter-btn");
const rejectedFilterBtn=document.getElementById("rejected-filter-btn");

const allCardSection=document.getElementById('allCards');


const mainContainer=document.querySelector('main');

function calculateCounts(){
   totalCount.innerText= allCardSection.children.length;
   interviewingCount.innerText=interviewingList.length;
   rejectingCount.innerText=rejectedList.length;
   allCardNumbers.innerText=allCardSection.children.length;
}

calculateCounts();

function toggleStyle(id){
    allFilterBtn.classList.add('bg-gray-200','text-black');
    interviewFilterBtn.classList.add('bg-gray-200','text-black');
    rejectedFilterBtn.classList.add('bg-gray-200','text-black');

    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white');  
    
    const selectedBtn=document.getElementById(id);
    selectedBtn.classList.add('bg-[#3B82F6]','text-white');
    selectedBtn.classList.remove('bg-gray-200','text-black');

}