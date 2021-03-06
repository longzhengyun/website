var app = angular.module('app', ['ngSanitize', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'content': {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			},
			'menu@home': {
				templateUrl: 'views/menu.html',
				controller: 'menuController'
			}
		}
	})
	.state('articleList', {
		url: '/articleList',
		views: {
			'header@articleList': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/article_list.html',
				controller: 'articleListController'
			},
			'menu@articleList': {
				templateUrl: 'views/menu.html',
				controller: 'menuController'
			}
		}
	})
	.state('articleDetail', {
		url: '/articleDetail/:id', //在id前面加一个冒号，从而制订了一个参数化URL
		views: {
			'header@articleDetail': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/article_detail.html',
				controller: 'articleDetailController'
			}
		}
	})
	.state('siteList', {
		url: '/siteList',
		views: {
			'header@siteList': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/site_list.html',
				controller: 'siteListController'
			},
			'menu@siteList': {
				templateUrl: 'views/menu.html',
				controller: 'menuController'
			}
		}
	})
	.state('owner', {
		url: '/owner',
		views: {
			'header@owner': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/owner.html',
				controller: 'ownerController'
			},
			'menu@owner': {
				templateUrl: 'views/menu.html',
				controller: 'menuController'
			}
		}
	})
	.state('validatePass', {
		url: '/validatePass',
		views: {
			'header@validatePass': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/validate_pass.html',
				controller: 'validatePassController'
			}
		}
	})
	.state('resume', {
		url: '/resume',
		views: {
			'header@resume': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/resume.html',
				controller: 'resumeController'
			}
		}
	})
	.state('resumeInfo', {
		url: '/resumeInfo',
		views: {
			'header@resumeInfo': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/resume_info.html',
				controller: 'resumeInfoController'
			}
		}
	})
	.state('resumeSkill', {
		url: '/resumeSkill',
		views: {
			'header@resumeSkill': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/resume_skill.html',
				controller: 'resumeSkillController'
			}
		}
	})
	.state('resumeExperience', {
		url: '/resumeExperience',
		views: {
			'header@resumeExperience': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/resume_experience.html',
				controller: 'resumeExperienceController'
			}
		}
	})
	.state('resumeOther', {
		url: '/resumeOther',
		views: {
			'header@resumeOther': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/resume_other.html',
				controller: 'resumeOtherController'
			}
		}
	})
	.state('about', {
		url: '/about',
		views: {
			'header@about': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/about.html',
				controller: 'aboutController'
			}
		}
	})
	.state('version', {
		url: '/version',
		views: {
			'header@version': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/version.html',
				controller: 'versionController'
			}
		}
	})
	.state('caseList', {
		url: '/caseList',
		views: {
			'header@caseList': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/case_list.html',
				controller: 'caseListController'
			}
		}
	})
	.state('caseDetail', {
		url: '/caseDetail/:id', //在id前面加一个冒号，从而制订了一个参数化URL
		views: {
			'header@caseDetail': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/case_detail.html',
				controller: 'caseDetailController'
			}
		}
	})
	.state('search', {
		url: '/search',
		views: {
			'content': {
				templateUrl: 'views/search.html',
				controller: 'searchController'
			}
		}
	});
}])