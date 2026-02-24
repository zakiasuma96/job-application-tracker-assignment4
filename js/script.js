let interviewingList=[];
let rejectedList=[];
let currentStatus='all';

let totalCount =document.getElementById("totalCount");
let interviewingCount =document.getElementById("interviewingCount");
let rejectingCount =document.getElementById("rejectingCount");
let allCardNumbers=document.getElementById("allCardNumbers");


const allFilterBtn=document.getElementById("all-filter-btn");
const interviewFilterBtn=document.getElementById("interview-filter-btn");
const rejectedFilterBtn=document.getElementById("rejected-filter-btn");

const allCardSection=document.getElementById('allCards');


const mainContainer=document.querySelector('main');

const filteredSection=document.getElementById('filtered-section');

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
    currentStatus=id;
    selectedBtn.classList.add('bg-[#3B82F6]','text-white');
    selectedBtn.classList.remove('bg-gray-200','text-black');

    if(id=='interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id=='all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
       
    }
     else if(id=='rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }

}

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn')){
            const parentNode =event.target.parentNode.parentNode;

    const companyName=parentNode.querySelector('.companyName').innerText;
    const positionName=parentNode.querySelector('.positionName').innerText;
    const location=parentNode.querySelector('.location').innerText;
    const type=parentNode.querySelector('.type').innerText;
    const salary=parentNode.querySelector('.salary').innerText;
    const appliedStatus=parentNode.querySelector('.applied').innerText;
    const description=parentNode.querySelector('.description').innerText;

    // console.log(companyName, positionName, location,type,salary,description);

    parentNode.querySelector('.applied').innerText='Applied';
    const cardInfo={
        companyName,
        positionName,
        location,
        type,
        salary,
        appliedStatus:'Applied',
        description
    }
    const companyExist=interviewingList.find(item=>item.companyName==cardInfo.companyName)
    

    if(!companyExist){
        interviewingList.push(cardInfo);
    }
    rejectedList= rejectedList.filter(item=>item.companyName !== cardInfo.companyName);
    calculateCounts();
    if(currentStatus=='rejected-filter-btn'){
            renderRejected();
    }
    calculateCounts();

    }
    else if(event.target.classList.contains('rejected-btn')){
            const parentNode =event.target.parentNode.parentNode;

    const companyName=parentNode.querySelector('.companyName').innerText;
    const positionName=parentNode.querySelector('.positionName').innerText;
    const location=parentNode.querySelector('.location').innerText;
    const type=parentNode.querySelector('.type').innerText;
    const salary=parentNode.querySelector('.salary').innerText;
    const appliedStatus=parentNode.querySelector('.applied').innerText;
    const description=parentNode.querySelector('.description').innerText;

    // console.log(companyName, positionName, location,type,salary,description);

    parentNode.querySelector('.applied').innerText='Rejected';
    const cardInfo={
        companyName,
        positionName,
        location,
        type,
        salary,
        appliedStatus:'Rejected',
        description
    }
    const companyExist=rejectedList.find(item=>item.companyName==cardInfo.companyName)
    

    if(!companyExist){
        rejectedList.push(cardInfo);
    }
    interviewingList= interviewingList.filter(item=>item.companyName !== cardInfo.companyName);
    if(currentStatus=='interview-filter-btn'){
        renderInterview();
    }
    calculateCounts();
    

    }

})

function renderInterview (){
    filteredSection.innerHTML= ''

    for(let interview of interviewingList){
        console.log(interview);
        let div =document.createElement('div');
        div.className= 'flex justify-between bg-gray-50 p-8 rounded-xl';
        div.innerHTML= ` 
                 <div class="card-left space-y-2 ">
                    <!-- part-1  -->
                    <div class="space-y-2">
                        <p class="text-[#002C5C] text-4xl companyName">${interview.companyName}</p>
                        <p class="positionName text-[#64748B] text-[16px] font-medium">${interview.positionName}</p>

                    </div>
                    <!-- part-2  -->
                     <div class="flex gap-4 ">
                        <p class="location  text-[#64748B] text-[16px] font-medium">${interview.location}</p>
                        <div class="flex items-center justify-center  gap-2">
                             <span class="bg-[#64748B] w-2 h-2 rounded-full"></span>
                            <p class="type  text-[#64748B] text-[16px] font-medium">${interview.type}</p>
                        </div>
                        <div class="flex items-center justify-center  gap-2">
                            <span class="bg-[#64748B] w-2 h-2 rounded-full"></span>
                            <p class="salary   text-[#64748B] text-[16px] font-medium  "> ${interview.salary}</p>
                        </div>
                     </div>
                        <!-- part-3  -->
                         
                            <p class="applied bg-[#a4cbf256] w-40 px-4 py-4 text-center rounded-xl uppercase">${interview.appliedStatus}</p>
                         

                         <!-- part-4  -->
                          <div>
                            <p class=" description text-[#64748B] text-[16px] font-medium">${interview.description}</p>
                          </div>

                          <!-- part-5  -->
                           <div class="flex gap-4">
                            <button class="interview-btn border border-[#10B981] text-[#10B981] px-5 py-3 rounded-xl uppercase cursor-pointer">
                                Interview
                            </button>
                            <button class="rejected-btn text-[#EF4444] px-5 py-3 rounded-xl border-[#EF4444] border uppercase ">Rejected</button>
                           </div>
                 </div>
                 <div class="card-right">
                    <button class="delete-btn">
                        
                        <i class="fa-solid fa-trash"></i>
                    </button>
                 </div>`

        filteredSection.appendChild(div);
    }
}

function renderRejected (){
    filteredSection.innerHTML= ''

    for(let reject of rejectedList){
        console.log(reject);
        let div =document.createElement('div');
        div.className= 'flex justify-between bg-gray-50 p-8 rounded-xl';
        div.innerHTML= ` 
                 <div class="card-left space-y-2 ">
                    <!-- part-1  -->
                    <div class="space-y-2">
                        <p class="text-[#002C5C] text-4xl companyName">${reject.companyName}</p>
                        <p class="positionName text-[#64748B] text-[16px] font-medium">${reject.positionName}</p>

                    </div>
                    <!-- part-2  -->
                     <div class="flex gap-4 ">
                        <p class="location  text-[#64748B] text-[16px] font-medium">${reject.location}</p>
                        <div class="flex items-center justify-center  gap-2">
                             <span class="bg-[#64748B] w-2 h-2 rounded-full"></span>
                            <p class="type  text-[#64748B] text-[16px] font-medium">${reject.type}</p>
                        </div>
                        <div class="flex items-center justify-center  gap-2">
                            <span class="bg-[#64748B] w-2 h-2 rounded-full"></span>
                            <p class="salary   text-[#64748B] text-[16px] font-medium  "> ${reject.salary}</p>
                        </div>
                     </div>
                        <!-- part-3  -->
                         
                            <p class="applied bg-[#a4cbf256] w-40 px-4 py-4 text-center rounded-xl uppercase">${reject.appliedStatus}</p>
                         

                         <!-- part-4  -->
                          <div>
                            <p class=" description text-[#64748B] text-[16px] font-medium">${reject.description}</p>
                          </div>

                          <!-- part-5  -->
                           <div class="flex gap-4">
                            <button class="interview-btn border border-[#10B981] text-[#10B981] px-5 py-3 rounded-xl uppercase cursor-pointer">
                                Interview
                            </button>
                            <button class="rejected-btn text-[#EF4444] px-5 py-3 rounded-xl border-[#EF4444] border uppercase ">Rejected</button>
                           </div>
                 </div>
                 <div class="card-right">
                    <button class="delete-btn">
                        
                        <i class="fa-solid fa-trash"></i>
                    </button>
                 </div>`

        filteredSection.appendChild(div);
    }
}