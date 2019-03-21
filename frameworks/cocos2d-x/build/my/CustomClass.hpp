//
//  CustomClass.hpp
//  LostRoutes-mobile
//
//  Created by TU on 2019/2/15.
//

#ifndef CustomClass_hpp
#define CustomClass_hpp

#include <stdio.h>
#include "cocos2d.h"
namespace cocos2d {
    class CustomClass : public cocos2d::Ref
    {
    public:
        CustomClass();
        ~CustomClass();
        bool init();
        std::string helloMsg();
        CREATE_FUNC(CustomClass);
    };
}
#endif /* CustomClass_hpp */
