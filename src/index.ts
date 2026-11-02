import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN
});

const { data } = await octokit.rest.repos.get({
	owner: "heiwa4126",
	repo: "octokit1"
});

console.log(data.full_name);
