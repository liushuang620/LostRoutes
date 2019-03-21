//
//  CustomClass.cpp
//  LostRoutes-mobile
//
//  Created by TU on 2019/2/15.
//

#include "CustomClass.hpp"
USING_NS_CC;
CustomClass::CustomClass(){
}
CustomClass::~CustomClass(){
}
bool CustomClass::init(){
    return true;
}
std::string CustomClass::helloMsg(){
    return "this is CustomClass Msg!";
}
