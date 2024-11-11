import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './component/Heading'
import Container from './component/Container'
import Flex from './component/flex'
import Image from './component/Image'
import Logo from './assets/freepik__candid-image-photography-natural-textures-highly-r__63400.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-600 text-[30px] ">hello guys</h1>
      <div className="py-5 bg-teal-800">
        <Container >
          <h1 className="text-white text-[30px] bg-blue-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maiores nisi! Quos, esse dolorem quas similique itaque eveniet rerum doloribus labore? Quia quos repellat temporibus fugiat, tempora molestias architecto quis. Eum aperiam odit in. Nulla porro cumque adipisci, eveniet facilis omnis amet id, odit beatae officia explicabo sequi incidunt velit officiis. Eveniet necessitatibus omnis dignissimos, in voluptate exercitationem nihil, ullam velit recusandae quidem accusamus cupiditate sequi quod porro optio fugit natus sapiente, quisquam amet eum? Consectetur suscipit at minus similique, numquam, debitis quibusdam dolor optio aliquam perferendis eum aspernatur distinctio rem, facere inventore est. In cum velit sed temporibus quidem nemo voluptate ducimus harum ab, iusto animi officiis amet iste dicta corrupti asperiores provident ullam molestias recusandae. Consequatur corporis pariatur commodi vero tempore sunt architecto quae odit, est cumque iure eveniet reiciendis quasi odio dolore modi ut voluptates assumenda. Explicabo, provident maiores corporis, voluptates ut culpa quis voluptas minus officiis fugiat modi magni necessitatibus deserunt sequi veniam excepturi nulla tempore quia. Alias reiciendis nobis quasi iure laboriosam? Ipsa, sit quasi. Quaerat, unde autem rerum commodi similique perspiciatis eos aliquid voluptatibus aut omnis, saepe labore necessitatibus corrupti beatae pariatur dolores dignissimos magni. Iure repellat non in voluptatibus, tempora quibusdam perspiciatis totam earum reiciendis debitis voluptates eum? Voluptatem ducimus tenetur sunt aliquid eius a unde id eveniet excepturi vel, debitis saepe in, distinctio cumque quos! Laboriosam corrupti nam qui, ipsa in, nesciunt accusantium quas sequi nobis dicta ea nostrum error sit, asperiores perferendis voluptates. Rem voluptatibus suscipit sequi porro. Fugit magni porro eum? Temporibus quaerat iste, ad nobis, reiciendis beatae aliquam repudiandae alias cupiditate labore esse quae similique, obcaecati optio voluptas sed illum voluptatem natus. Illo sapiente dolorem praesentium quisquam repellendus, id vitae fugit aperiam quia consequuntur nemo quibusdam quod, esse, numquam itaque blanditiis tenetur eos optio neque minima dolores dolore velit consequatur necessitatibus. Expedita, consectetur! Blanditiis laudantium quo ut exercitationem reiciendis maxime natus temporibus. Nobis, et optio. Qui et, perferendis, aperiam facere fugiat quae adipisci nemo ipsum magni consectetur quia vel. Nostrum eveniet quisquam rerum obcaecati praesentium distinctio magnam pariatur at, quo eaque maiores asperiores, alias, sunt natus consequatur voluptates a dolores. Cum neque commodi similique a facilis consectetur sint. Rerum soluta minus aspernatur ab a repellendus iste? Dignissimos nihil officiis qui iusto delectus perspiciatis, explicabo, ratione voluptas aliquid illo nisi esse dolore maxime! Laudantium corporis minima voluptatum excepturi iusto consectetur officia quibusdam facere magni molestiae, iste quisquam, ipsum maxime adipisci soluta? Repellat ullam repudiandae eveniet mollitia amet. Eum omnis, maiores ducimus quae, porro deleniti enim est accusamus rerum eaque temporibus consequatur inventore placeat nihil repudiandae error architecto at velit quisquam iure odit doloremque. Aperiam cum laborum ex porro sequi voluptates soluta rerum, sapiente dignissimos consectetur ratione maxime iure illum sint in incidunt tenetur debitis doloremque quisquam dolores voluptatem sed nam beatae. Qui unde exercitationem autem aspernatur id tenetur reprehenderit ad quod nesciunt blanditiis ullam temporibus, repellat beatae laudantium officia est at sit, itaque iure maiores animi? Fuga facilis provident quam quaerat, aliquam quas. Harum, numquam placeat id ratione suscipit quia?</h1>
        </Container>
       
      </div>
      <container>
          <Flex className="justify-around">
            <div className="">fuhuisefhu</div>
            <Image src={Logo}>
          </Image>
            <div className="">00000000</div>
            
          </Flex>
          
        </container>

    </>
  )
}

export default App
