import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GalleryView, HomeView } from "../views";

const users = [
	{
		username: "john",
    address: "2fmz8SuNVyxEP6QwKQs6LNaT2ATszySPEJdhUDesxktc",
	},
	{
		username: "jane",
    address: "3yTKSCKoDcjBFpbgxyJUh4cM1NG77gFXBimkVBx2hKrf",
	},
];

const Home: NextPage = (props) => {
  const [subdomain, setSubDomain] = useState<string>();
	useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setSubDomain(arr[0]);
	}, []);
	const requestedUser = users.find((user) => user.username === subdomain);
  return (
    <div className="app">
      <Head>
        <title>Caw Caw!</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
      </Head>
			{subdomain ? (
				requestedUser ? (
					// <div>
					// 	<h1>username: {requestedUser.username}</h1>
					// 	<h3>address: {requestedUser.address}</h3>
					// </div>
          <GalleryView username={requestedUser.username} address={requestedUser.address}/>
				) : (
					<h1>Not Found</h1>
				)
			) : (
				<HomeView />
			)}
		</div>
	);
};

export default Home;
