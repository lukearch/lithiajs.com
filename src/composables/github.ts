import { Octokit } from '@octokit/rest';

export const useGithub = () => {
  const config = useRuntimeConfig();
  const octokit = new Octokit({
    auth: config.public.ghToken,
  });

  const getRepo = async () => {
    try {
      const org = await octokit.orgs.get({
        org: 'lithiajs',
      });

      return await octokit.repos
        .get({
          owner: org.data.login,
          repo: config.public.ghRepo,
        })
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return { getRepo };
};
