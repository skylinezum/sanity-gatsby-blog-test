export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e09bbf18d0c8a31da714653',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-5w4jikw3',
                  apiId: 'd2b520da-3622-437c-8a71-ec4e5f24b300'
                },
                {
                  buildHookId: '5e09bbf1cb6264dff2b039d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-55bf7esh',
                  apiId: 'f4ddcca7-fc86-42e6-92a7-728745900238'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skylinezum/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-55bf7esh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
