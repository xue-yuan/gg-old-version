const fetch = require('node-fetch')
require('dotenv').config()

const TOKEN = process.env.GITHUB_OAUTH
const GITHUB_API = 'https://api.github.com/graphql'

function getQuery(type: string): string {
  return `
  {
    repository(owner: "github", name: "gitignore") {
      content:object(expression: "master:${type}.gitignore") {
        ... on Blob {
          text
        }
      }
    }
  }`
}

export function generator(type: string): Promise<any> {
  const query = getQuery(type)
  return fetch(GITHUB_API, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
    },
    body: JSON.stringify({query}),
  }).then((response: any) => {
    return response.json()
  }).then((data: any) => {
    return data.data.repository.content.text
  })
}

export function mapping(type: string): string {
  // pass
  return type
}

export const AVAILABLE = [
  'Actionscript',
  'Ada',
  'Agda',
  'Android',
  'AppEngine',
  'AppceleratorTitanium',
  'ArchLinuxPackages',
  'Autotools',
  'C++',
  'C',
  'CFWheels',
  'CMake',
  'CUDA',
  'CakePHP',
  'ChefCookbook',
  'Clojure',
  'CodeIgniter',
  'CommonLisp',
  'Composer',
  'Concrete5',
  'Coq',
  'CraftCMS',
  'D',
  'DM',
  'Dart',
  'Delphi',
  'Drupal',
  'EPiServer',
  'Eagle',
  'Elisp',
  'Elixir',
  'Elm',
  'Erlang',
  'ExpressionEngine',
  'ExtJs',
  'Fancy',
  'Finale',
  'ForceDotCom',
  'Fortran',
  'FuelPHP',
  'GWT',
  'Gcov',
  'GitBook',
  'Go',
  'Godot',
  'Gradle',
  'Grails',
  'Haskell',
  'IGORPro',
  'Idris',
  'JBoss',
  'JENKINS_HOME',
  'Java',
  'Jekyll',
  'Joomla',
  'Julia',
  'KiCad',
  'Kohana',
  'Kotlin',
  'LabVIEW',
  'Laravel',
  'Leiningen',
  'LemonStand',
  'Lilypond',
  'Lithium',
  'Lua',
  'Magento',
  'Maven',
  'Mercury',
  'MetaProgrammingSystem',
  'Nanoc',
  'Nim',
  'Node',
  'OCaml',
  'Objective-C',
  'Opa',
  'OpenCart',
  'OracleForms',
  'Packer',
  'Perl',
  'Phalcon',
  'PlayFramework',
  'Plone',
  'Prestashop',
  'Processing',
  'PureScript',
  'Python',
  'Qooxdoo',
  'Qt',
  'R',
  'ROS',
  'Rails',
  'Raku',
  'RhodesRhomobile',
  'Ruby',
  'Rust',
  'SCons',
  'Sass',
  'Scala',
  'Scheme',
  'Scrivener',
  'Sdcc',
  'SeamGen',
  'SketchUp',
  'Smalltalk',
  'Stella',
  'SugarCRM',
  'Swift',
  'Symfony',
  'SymphonyCMS',
  'TeX',
  'Terraform',
  'Textpattern',
  'TurboGears2',
  'Typo3',
  'Umbraco',
  'Unity',
  'UnrealEngine',
  'VVVV',
  'VisualStudio',
  'Waf',
  'WordPress',
  'Xojo',
  'Yeoman',
  'Yii',
  'ZendFramework',
  'Zephir',
]
