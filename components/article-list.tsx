interface Article {
  id: number
  date: string
  title: string
  views: string
}

const articles: Article[] = [
  { id: 1, date: "2021", title: "Making the Web. Faster.", views: "94,902" },
  { id: 2, date: "2020", title: "Next for Vercel", views: "52,653" },
  { id: 3, date: "", title: "Books people re-read", views: "36,684" },
  { id: 4, date: "", title: "Develop, Preview, Test", views: "33,584" },
  { id: 5, date: "", title: "Static Hoisting", views: "39,563" },
  { id: 6, date: "", title: "An ode to code golf", views: "18,409" },
  { id: 7, date: "", title: "Vercel", views: "54,081" },
  { id: 8, date: "", title: "2019 in Review", views: "66,631" },
  { id: 9, date: "2017", title: "It's Hard to Forego Efficiency", views: "45,525" },
  { id: 10, date: "", title: "2016 in Review", views: "45,514" },
  { id: 11, date: "2016", title: "Addressable Errors", views: "22,505" },
  { id: 12, date: "2015", title: "Pure UI", views: "697,322" },
  { id: 13, date: "", title: "ECMAScript 6", views: "127,201" },
  { id: 14, date: "2014", title: "7 Principles of Rich Web Applications", views: "723,578" },
]

export function ArticleList() {
  return (
    <div className="space-y-0">
      <div className="grid grid-cols-[100px_1fr_100px] gap-8 mb-8 text-sm text-gray-500 uppercase tracking-wide">
        <div>date</div>
        <div>title</div>
        <div className="text-right">views</div>
      </div>
      
      <div className="space-y-1">
        {articles.map((article) => (
          <div
            key={article.id}
            className="grid grid-cols-[100px_1fr_100px] gap-8 py-3 hover:bg-gray-800/50 -mx-4 px-4 rounded cursor-pointer transition-colors"
          >
            <div className="text-gray-500 text-sm">
              {article.date}
            </div>
            <div className="text-gray-100">
              {article.title}
            </div>
            <div className="text-gray-400 text-right text-sm">
              {article.views}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}