const workdata = []
const resumeSection = document.getElementById('resume')



fetch('api/workdata.json')
  .then((res) => res.json())
  .then((data) => {
    data.work.forEach((work) => {



    const articleComponent = buildArticleComponent(work)

    resumeSection.insertAdjacentHTML('beforeend', articleComponent)
    })
  })


function buildArticleComponent ({ company, title, location, startDate, endDate, summary, highlights } = work) {
    const  testArray = []
  if(highlights && highlights.length > 0) { highlights.forEach(h => {
      testArray.push(h)
    })
  }

  console.log(testArray)

  const articleComponent = `
  <article>
        <header>
          <div>
            <h3>${title}</h3>
            <p>${company} | ${location}</p>
          </div>
          <p>${startDate} - ${endDate}</p>
        </header>
        <section>
          <p class='job-description'>${summary}</p>
            <p>highlights:</p>
            <ul>
              ${
                testArray.map(h =>
                `<li>
                  ${h}
                  </li>
                `
                ).join('')
              }
            </ul>
          <p class='read-more'>Read more</p>
        </section>
      </article>
`

   return articleComponent

}




  // resumeSection.insertAdjacentHTML('beforeend', articleComponent)


