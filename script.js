let selectPage = 1;
const totalPage = 60;

const container = document.querySelector('.page')


const genaritionNumberPages = (selectPage, totalPage)=>{

    const pagesVetor = [];

    if(totalPage<10){
        for (let index = 1; index <= totalPage; index++) {
            pagesVetor.push(index);

            
            
        }
        return pagesVetor
    }

    for (let index = 1; index <= totalPage; index++) {
        
        if(selectPage < 5 && index < 5){
            
            
            if(index == (totalPage / 2)- 1){
                pagesVetor.push(index)
                pagesVetor.push(index+ 1)
            }else{
                pagesVetor.push(index)
            }
        }

        if(selectPage >= 5){
            if(selectPage >= 5 && index == selectPage
            || index == selectPage - 1 || index == selectPage + 1 || index == 1){
               
                
                if(selectPage < totalPage - 3){
                    if(index == 1){
                    
                        pagesVetor.push(index)
                        pagesVetor.push('...')
                    }else{
                        pagesVetor.push(index)
                    }
                }
                
    
            }
        }

        if(selectPage >= totalPage - 3 && index >= totalPage - 3){
            
            if(index == totalPage - 3){
                pagesVetor.push(1)
                pagesVetor.push('...')
                pagesVetor.push(index - 1)
                pagesVetor.push(index)
            }else{
                pagesVetor.push(index)
            }
        }
       

        if(selectPage < totalPage - 3){
            if(index === totalPage){
                pagesVetor.push('...')
                pagesVetor.push(totalPage)
            }
        }
        
    }


    return pagesVetor
}
const nextPage = ()=>{

    if(selectPage<totalPage){
        selectPage++
        
        container.innerHTML =  renderPagination(genaritionNumberPages(selectPage,totalPage))
    }


}

const prevPage = ()=>{

    if(selectPage>1){
        selectPage--
        
        container.innerHTML =  renderPagination(genaritionNumberPages(selectPage,totalPage))
    }


}
const renderNewPage = num => {
    selectPage = num
    container.innerHTML =  renderPagination(genaritionNumberPages(num,totalPage))
}



const renderPagination = item => {

    let htmInterno = '        <button onclick="prevPage()" class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page" tabindex="0" type="button" aria-label="Ir para a página anterior"><svg class="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg><span class="MuiTouchRipple-root"></span></button>'
    
    for (let index = 0; index < item.length; index++) {
        
        if(isNaN(item[index])){
            htmInterno +=`<span>${item[index]}</span>`
        }else{
            htmInterno +=`<li>
            <button onclick="renderNewPage(${item[index]})" class="MuiButtonBase-root MuiPaginationItem-root  MuiPaginationItem-page ${item[index] == selectPage ? 'ativo' : ''}">${item[index]}</button>
        </li>`
        }
        
    }

    htmInterno+='<button onclick="nextPage()" class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page" tabindex="0" type="button" aria-label="Ir para a próxima página"><svg class="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg><span class="MuiTouchRipple-root"></span></button>'


    return htmInterno

}


container.innerHTML = renderPagination(genaritionNumberPages(selectPage,totalPage))
