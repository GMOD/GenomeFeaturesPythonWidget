#!/bin/bash
pip3 install -e  . 
jupyter nbextension install genomefeatures --py --sys-prefix
jupyter nbextension enable genomefeatures --py --sys-prefix
