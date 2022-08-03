download=()=>{
    const selected=document.querySelector('.selected');
    const option=document.querySelector('.option');

    selected.addEventListener('click',function () {
            option.classList.toggle('option-active');
        });
    }
    download();
