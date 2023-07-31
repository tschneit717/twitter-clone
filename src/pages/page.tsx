"use client"


import { Feed } from '../app/components/Feed'
import InputField from '../app/components/Form/Input/Input'
import { Form } from '../app/components/Form'
import { createTweet } from '@/api/tweets/createTweet'
import { useEffect } from 'react'

const tweets = [
  {
    id: 1,
    name: 'Jeff Probst',
    imageURL: 'https://pbs.twimg.com/profile_images/438521943839371264/-w8EBc_E_400x400.jpeg',
    handle: '@JeffProbst',
    message: 'Hey guys!  Did ya miss me? I missed you guys!  I am so pumped for tonight!',
    date: 'Mar 15',
    likes: 123000,
    retweets: 12300,
    replies: 1230,
  },
  {
    id: 2,
    name: 'Jeff Probst',
    imageURL: 'https://pbs.twimg.com/profile_images/438521943839371264/-w8EBc_E_400x400.jpeg',
    handle: '@JeffProbst',
    message: 'Survivor fans!!! We are back home with another great season.  As always excited to share it with you all in September!!  #Survivor',
    date: 'Mar 15',
    likes: 123000,
    retweets: 12300,
    replies: 1230,
  },
]
const handleFormSubmit = async (values: any) => {
  const tweet = values[0].value
  await createTweet('1', tweet)
}

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Feed tweets={tweets}/>
      <Form onSubmit={handleFormSubmit}>
        <InputField
          label="What's going on?"
          name="tweet"
          type="textarea"
          placeholder="What's going on?"
        />
      </Form>
    </main>
  )
}
