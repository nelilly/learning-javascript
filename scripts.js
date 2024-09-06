const state = {
  conditionals: {},
  pillar: 'metrics',
  loading: false,
  error: null,
  tenant_id: '6627f95a59510094acd76dc8',
  devhub_ids: {},
  fields: {
    name: 'DiSCO',
    env: 'prod',
    provisionTarget: 'aws',
    awsAccount: '123456789012',
    awsSize: '1',
    awsRegion: 'eu-central-1',
    vmalert: true,
    alertmanager: true,
    rdeiSize: '1',
  },
  instances: {},
  instanceNames: [],
  instanceIds: [],
  devhub_details: {
    data: [
      {
        name: 'TVE Streamworks',
        applicationId: 9641,
        status: 'Active',
        updatedAt: '2024-01-03T22:04:13.000Z',
      },
      {
        name: 'Casper',
        applicationId: 3529,
        status: 'Pre-Prod',
        updatedAt: '2022-09-22T16:01:57.000Z',
      },
      {
        name: 'NWT Zabbix',
        applicationId: 4201,
        status: 'Retired',
        updatedAt: '2024-01-25T19:12:13.000Z',
      },
      {
        name: 'Mozart',
        applicationId: 8021,
        status: 'Active',
        updatedAt: '2023-10-11T01:56:12.000Z',
      },
    ],
    error: null,
    loading: false,
  },
  tenants: [
    {
      id: '66265a7506ba46bf03afcb7f',
      name: 'DiSCO Enfuego',
      description: 'New tenant with DevHub Apps. (Casper, DiSCO Bankend)',
      tenant_apps: [
        3529,
        21246,
      ],
      slug: 'disco-enfuego',
      git_repo: 'disco-enfuego',
      created: 1713789557,
      updated: 1717688944,
      delete_ts: 0,
    },
    {
      id: '66267fc1822b69d8cb204a79',
      name: 'DiSCO Fire',
      description: 'New Tenant with 3 DevHub Apps \nEP-Fintech-SES- Nestor Core\nWorkstations - CTS\ndx DE Clickstream Collector\n',
      tenant_apps: [
        3541,
        6773,
        7532,
      ],
      slug: 'disco-fire',
      git_repo: 'disco-fire',
      created: 1713799105,
      updated: 1713799105,
      delete_ts: 0,
    },
    {
      id: '65fb2445f35b8264fec2f624',
      name: 'DiSCO Inferno',
      description: 'Test Tenant for DiSCO Inferno',
      tenant_apps: [
        3529,
      ],
      slug: 'disco-inferno',
      git_repo: 'disco-inferno',
      created: 1710957637,
      updated: 1712600313,
      delete_ts: 0,
    },
    {
      id: '66268368822b69d8cb204a89',
      name: 'DiSCO No Apps',
      description: 'No DevHub apps',
      tenant_apps: [],
      slug: 'disco-no-apps',
      git_repo: 'disco-no-apps',
      created: 1713800040,
      updated: 1713800040,
      delete_ts: 0,
    },
    {
      id: '6627f95a59510094acd76dc8',
      name: 'DiSCO Test',
      description: 'A Tenant with 4 DevHub Apps',
      tenant_apps: [
        9641,
        3529,
        4201,
        8021,
      ],
      slug: 'disco-test',
      git_repo: 'disco-test',
      created: 1713895770,
      updated: 1713895770,
      delete_ts: 0,
    },
  ],
  pillarForms: {
    metrics: {
      pillar: 'local',
      instructions: {
        type: 'paragraph',
        values: [
          'The local pillar is a test platform to simulate working with an actual pillar. The data is hard coded, but provides a working model to work with in the user interface.',
        ],
      },
      inputs: [
        {
          type: 'text',
          name: 'name',
          label: 'Instance Name',
          required: true,
          description: {
            type: 'paragraph',
            values: [
              'A good instance name should include identifying information such as: the application name, the application environment (dev, test, production, etc.), the pillar the instance is being provisipned for (metrics, logging, synthetics, etc.), the instance region (east, west, etc.), etc.',
              'Use whichever terms will help your team differentiate one of your instances from another.',
              'The instance name will be converted to kebab-case (all lowercase, seperated by dashes).',
            ],
          },
        },
        {
          type: 'select',
          name: 'env',
          label: 'Environment',
          description: {
            type: 'paragraph',
            values: [
              'Environment of your metrics instance. It could be dev, test, stage, prod based on your usecase.',
            ],
          },
          options: [
            {
              label: 'Development',
              value: 'dev',
            },
            {
              label: 'Testing',
              value: 'test',
            },
            {
              label: 'Staging',
              value: 'stage',
            },
            {
              label: 'Production',
              value: 'prod',
            },
          ],
        },
        {
          type: 'text',
          name: 'envName',
          label: 'Environment Name',
          required: true,
          description: {
            type: 'paragraph',
            values: [
              'A good instance name should include identifying information such as: the application name, the application environment (dev, test, production, etc.), the pillar the instance is being provisipned for (metrics, logging, synthetics, etc.), the instance region (east, west, etc.), etc.',
              'Use whichever terms will help your team differentiate one of your instances from another.',
              'The instance name will be converted to kebab-case (all lowercase, seperated by dashes).',
            ],
          },
          conditional: {
            for_field: 'env',
            value: 'dev',
          },
        },
        {
          type: 'select',
          name: 'provisionTarget',
          label: 'Provision Target',
          description: {
            type: 'paragraph',
            values: [
              'RDEI (rdei.comcast.com) is the preferred provioning target. RDEI is an on premise web service and API to provision compute, network, and storage resources. RDEI provides secure and scalable access to Kubernetes clusters, high-performance TCP load balancing, and remote NFS storage. It is designed to support the most demanding workloads in Comcast, combining high performance with massive scalability and high availability in three national datacenters, and many regional and syndication datacenters.',
              'AWS is an offsite, cloud-based option for European and Asia Pacific applications only. Additional details will be required as the services are provisioned.',
            ],
          },
          options: [
            {
              label: 'AWS',
              value: 'aws',
            },
            {
              label: 'RDEI',
              value: 'rdei',
            },
          ],
        },
        {
          type: 'text',
          name: 'awsAccount',
          label: 'AWS Account Number',
          description: {
            type: 'text',
            values: [
              'Your 12-digit AWS Account Number',
            ],
          },
          required: true,
          conditional: {
            for_field: 'provisionTarget',
            value: 'aws',
          },
        },
        {
          type: 'select',
          name: 'awsSize',
          label: 'AWS Size',
          options: [
            {
              label: 'Small: upto 1M active time series',
              value: '1',
            },
            {
              label: 'Medium: upto 10M active time series',
              value: '2',
            },
            {
              label: 'Large: upto 25M active time series',
              value: '3',
            },
          ],
          conditional: {
            for_field: 'provisionTarget',
            value: 'aws',
          },
        },
        {
          type: 'select',
          name: 'awsRegion',
          label: 'AWS Region',
          options: [
            {
              label: 'Europe (Frankfurt) [eu-central-1]',
              value: 'eu-central-1',
            },
            {
              label: 'Europe (Ireland) [eu-west-1]',
              value: 'eu-west-1',
            },
            {
              label: 'Europe (London) [eu-west-2]',
              value: 'eu-west-2',
            },
            {
              label: 'Europe (Paris) [eu-west-3]',
              value: 'eu-west-3',
            },
            {
              label: 'Europe (Stockholm) [eu-north-1]',
              value: 'eu-north-1',
            },
            {
              label: 'Asia Pacific (Sydney) [ap-southeast-2]',
              value: 'ap-southeast-2',
            },
          ],
          conditional: {
            for_field: 'provisionTarget',
            value: 'aws',
          },
        },
        {
          type: 'select',
          name: 'rdeiSize',
          label: 'RDEI Size',
          options: [
            {
              label: 'Small: upto 1M active time series',
              value: '1',
            },
            {
              label: 'Medium: upto 10M active time series',
              value: '2',
            },
            {
              label: 'Large: upto 25M active time series',
              value: '3',
            },
          ],
          conditional: {
            for_field: 'provisionTarget',
            value: 'rdei',
          },
        },
        {
          type: 'checkbox',
          name: 'vmalert',
          label: 'VM Alert',
          options: [],
        },
        {
          type: 'checkbox',
          name: 'alertmanager',
          label: 'Alert Manager',
          options: [],
        },
      ],
    },

  },
};

const createLookup = (table, key) => table.reduce((acc, it) => ({ ...acc, [it[key]]: it }), {});
const tenantLookup = createLookup(state.tenants, 'id');

const { inputs } = state.pillarForms[state.pillar];
const fields = Object.entries(state.fields).map((field) => ({ name: field[0], value: field[1] }));
const fieldLookup = createLookup(fields, 'name');

const conditionalTargets = new Set(inputs
  .filter((field) => field?.conditional?.for_field !== undefined)
  .map((field) => field.conditional?.for_field));

const conditionalFields = new Set(inputs
  .filter((field) => field?.conditional?.for_field !== undefined)
  .map((field) => field.name));

const activeTargets = Array.from(conditionalTargets)
  .reduce((obj, item) => ({ ...obj, [item]: fieldLookup[item].value }), {});

const activeConditionalFields = new Set(inputs
  .filter((field) => field?.conditional?.for_field !== undefined)
  .filter((field) => field?.conditional?.value === activeTargets[field?.conditional?.for_field])
  .map((field) => field.name));
const excludedFields = conditionalFields.difference(activeConditionalFields);

const cleanData = {
  ...state,
  type: 'Standard',
};

const submitData = {
  tenant_id: cleanData.tenant_id,
  devhub_ids: tenantLookup[cleanData.tenant_id].tenant_apps,
  instance_name: cleanData.fields.name,
  fields: Object.entries(cleanData.fields)
    .map((field) => ({ name: field[0], value: field[1] }))
    .filter((item) => !Array.from(excludedFields).includes(item.name)),
  metadata: [
    {
      name: 'git_repo',
      value: tenantLookup[cleanData.tenant_id].git_repo,
    },
  ],
};

const filteredFields = Object.entries(state.fields)
  .reduce((obj, item) => {
    console.log(item);
    if (Array.from(excludedFields).includes(item[0])) { return obj; }
    return { ...obj, [item[0]]: item[1] };
  }, {});

const conditionals = {
  filteredFields,
  excludedFields,
  cleanData,
  submitData,
};

console.log(conditionals);

(() => {
  document.getElementById('input').value = JSON.stringify(state);
  document.getElementById('output').innerHTML = JSON.stringify(filteredFields);
})();
